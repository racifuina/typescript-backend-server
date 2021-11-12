import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../dbconn';
export interface JobAttributes {
    jobId: number;
    title: string;
    description: string;
    location: string;
    hourlyRate: number;
}

interface JobCreationAttributes extends Optional<JobAttributes, 'jobId'> { }

interface JobInstance
    extends Model<JobAttributes, JobCreationAttributes>,
    JobAttributes { }

const job = sequelize.define<JobInstance>('job', {
    jobId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hourlyRate: {
        type: DataTypes.DECIMAL(25, 2),
        allowNull: false
    }
}, { timestamps: true });

export default job;
