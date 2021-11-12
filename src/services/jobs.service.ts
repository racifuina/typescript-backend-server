import Job, { JobAttributes } from '../models/job.model'

export class JobsService {
    async getAll() {
        return await Job.findAll();
    }
    async getById(jobId: number) {
        return await Job.findByPk(jobId);
    }
    async create(newJob: JobAttributes) {
        return await Job.create(newJob);
    }
    async updateById(jobId: number, changes: JobAttributes) {
        return await Job.update(changes, { where: { jobId } });
    }
}
