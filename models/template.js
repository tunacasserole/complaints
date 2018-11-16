'use strict';
module.exports = (sequelize, DataTypes) => {
  const Template = sequelize.define('Template', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false
    },
    resultType: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: false,
        isIn: [['free', 'yesNo', 'regex', 'boolean', 'date', 'select', 'multiple', 'compute']]
      }
    },
    moduleName: {
      type: DataTypes.STRING,
    },
    moduleVersion: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: false,
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: false,
        len: [0, 50]
      }
    },
    results: {
      type: DataTypes.STRING,
    },
    version: {
      type: DataTypes.FLOAT,
      defaultValue: 1
    }
  }, {
      validate: {
        moduleNameRequiredForCompute() {
          console.log(this.moduleName)
          if ((this.type === 'compute') && (this.moduleName == undefined)) {
            throw new Error('ModuleName is required for compute tasks.')
          }
        },
        resultListRequiredForSelectAndMultiSelect() {
          if ((['select', 'multiSelect'].includes(this.type)) && (this.moduleName === null)) {
            throw new Error('A list of possible results must be provided for select and multiple.')
          }
        }
      }
    }
  );

  Template.associate = function (models) {

    // Template has many tasks
    models.Template.hasMany(models.Task, {
      foreignKey: "templateId",
      sourceKey: "id"
    })
  }

  return Template;
};
