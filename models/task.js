'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    
    static associate(models) {
    
    }
  };
  Task.init({
    body: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:true
      }
    },
    deathLine: {
      field:'death_line',
      type:DataTypes.DATE,

    },
    isDone: {
      field:'is_done',
      type:DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'Tasks',
    underscored: true,
  });
  return Task;
};