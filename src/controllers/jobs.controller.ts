import { JsonController, Get, Put, Param, Body, Post, Delete } from 'routing-controllers'
import { JobsService } from '../services/jobs.service'
import { JobAttributes } from '../models/job.model'

const jobsService = new JobsService();

@JsonController('/jobs', { transformResponse: false })
export default class JobsController {
    @Get('')
    getAll() {
        return jobsService.getAll();
    }

    @Post('')
    post(@Body() body: JobAttributes) {
        return jobsService.insert(body);
    }

    @Get('/:jobId') getByJobId(@Param('jobId') jobId: number) {
        return jobsService.getById(jobId);
    }

    @Put('/:jobId')
    updateByJobId(@Param('jobId') jobId: number, @Body() body: JobAttributes) {
        return jobsService.updateById(jobId, body);
    }

    @Delete('/:jobId')
    deleteByJobId(@Param('jobId') jobId: number) {
        return jobsService.destroyById(jobId);
    }
}
