import Job, { JobAttributes } from '../models/job.model'

export class JobsService {
    getAll() {
        return Job.findAll();
    }
    getById(jobId: number) {
        return Job.findByPk(jobId);
    }
    insert(newJob: JobAttributes) {
        return Job.create(newJob);
    }
    updateById(jobId: number, changes: JobAttributes) {
        return Job.update(changes, { where: { jobId } });
    }
    destroyById(jobId: number) {
        return Job.destroy({ where: { jobId } });
    }
}
