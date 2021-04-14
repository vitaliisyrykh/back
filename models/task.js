'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task extends Model {
    
    static associate(models) {
    
    }
  };
  task.init({
    body: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: true,
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
    modelName: 'task',
    tableName: 'task'
  });
  return task;
};