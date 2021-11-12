import { JsonController, Get, Put, Param, Body, Post, Delete } from 'routing-controllers'
import { JobsService } from '../services/jobs.service'
import { JobAttributes } from '../models/job.model'

const jobsService = new JobsService();

@JsonController('/jobs', { transformResponse: false })
export default class JobsController {
    @Get('')
    async getAll() {
        return {
            status: 200,
            data: await jobsService.getAll(),
        }
    }

    @Post('')
    async post(@Body() body: JobAttributes) {
        const job = await jobsService.create(body);
        return {
            status: 200,
            data: job
        }
    }

    @Get('/:jobId')
    async getByJobId(@Param('jobId') jobId: number) {
        const job = await jobsService.getById(jobId);
        if (!job) {
            return {
                status: 404
            }
        }
        return {
            status: 200,
            data: job
        }
    }

    @Put('/:jobId')
    async updateByJobId(@Param('jobId') jobId: number, @Body() body: JobAttributes) {
        await jobsService.updateById(jobId, body);
        
        return {
            status: 200
        }
    }

    @Delete('/:jobId')
    async deleteByJobId(@Param('jobId') jobId: number) {
        const job = await jobsService.getById(jobId);
        if (!job) {
            return {
                status: 404
            }
        }
        
        await job.destroy();

        return {
            status: 200
        }
    }
}
