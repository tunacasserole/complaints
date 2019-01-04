'use strict';

module.exports = (sequelize, DataTypes) => {

  const Complaint = sequelize.define('Complaint', {
        
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },    
    program_id: {
      type: DataTypes.INTEGER
    },    
    client_id: {
      type: DataTypes.INTEGER
    },    
    provider_id: {
      type: DataTypes.INTEGER
    },    
    owner_id: {
      type: DataTypes.INTEGER
    },    
    worker_id: {
      type: DataTypes.INTEGER
    },    
    resolver_id: {
      type: DataTypes.INTEGER
    },    
    state: {
      type: DataTypes.STRING
    },    
    complainant_name: {
      type: DataTypes.STRING
    },    
    complainant_id: {
      type: DataTypes.INTEGER
    },    
    provider_number: {
      type: DataTypes.STRING
    },    
    reason_name: {
      type: DataTypes.STRING
    },    
    referred_to: {
      type: DataTypes.STRING
    },    
    complainant_type_id: {
      type: DataTypes.INTEGER
    },    
    complainant_relationship_id: {
      type: DataTypes.INTEGER
    },    
    reason_id: {
      type: DataTypes.INTEGER
    },    
    description: {
      type: DataTypes.TEXT
    },    
    created_at: {
      type: DataTypes.TIME
    },    
    updated_at: {
      type: DataTypes.TIME
    },    
    deleted_at: {
      type: DataTypes.TIME
    },    
    created_by: {
      type: DataTypes.INTEGER
    },    
    updated_by: {
      type: DataTypes.INTEGER
    },    
    deleted_by: {
      type: DataTypes.INTEGER
    },    
    resolved_on: {
      type: DataTypes.DATE
    },    
    occurred_on: {
      type: DataTypes.DATE
    },    
    case_manager_id: {
      type: DataTypes.INTEGER
    },    
    service_ids: {
      type: DataTypes.STRING
    },    
    service_delivery_problem_ids: {
      type: DataTypes.STRING
    },    
    contract_problem_ids: {
      type: DataTypes.STRING
    },    
    billed_on: {
      type: DataTypes.DATE
    },    
    documented_on: {
      type: DataTypes.DATE
    },    
    due_on: {
      type: DataTypes.DATE
    },    
    completed_on: {
      type: DataTypes.DATE
    },    
    started_on: {
      type: DataTypes.DATE
    },    
    ended_on: {
      type: DataTypes.DATE
    },    
    aps_contacted_on: {
      type: DataTypes.DATE
    },    
    hospitalizations_within_30_days: {
      type: DataTypes.BOOLEAN
    },    
  }, {});

return Complaint;
};


