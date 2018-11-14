'use strict';
module.exports = (sequelize, DataTypes) => {
  const Template = sequelize.define('Template', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: false,
        isIn: [['free', 'boolean', 'compute', 'date', 'select', 'multiple']]
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
    dispositions: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    version: {
      type: DataTypes.FLOAT,
      defaultValue: 1
    },
    configuration: {
      type: DataTypes.JSON,
    }
  }, {
      validate: {
        moduleNameRequiredForCompute() {
          console.log(this.moduleName)
          if ((this.type === 'compute') && (this.moduleName == undefined)) {
            throw new Error('ModuleName is required for compute tasks.')
          }
        },
        dispositionListRequiredForSelectAndMultiSelect() {
          if ((['select', 'multiSelect'].includes(this.type)) && (this.moduleName === null)) {
            throw new Error('A list of possible dispositions must be provided for this template type.')
          }
        }
      }
    }
  );

  return Template;
};
