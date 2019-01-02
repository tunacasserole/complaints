'use strict';
module.exports = (sequelize, DataTypes) => {
  const Complaint = sequelize.define('Complaint', {

    // Model Attributes
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },



  }, {});

  return Complaint;
};