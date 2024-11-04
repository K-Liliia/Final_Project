const {faker} = require('@faker-js/faker');
const {
    getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    getFilteredTeamTasks,
    getBulkTasksTimeInStatus
} = require("../../commonTaskMethods/tasksMethods");

describe('interaction with tasks from clickup: GET, POST, PUT, DELETE requests', () => {

    it('get all tasks', () => {
        getTasks('/list/901204466996/task').then((response) => {
            cy.log(response)
            expect(response.status).to.eq(200)
        })
    });

    it('create a new task', () => {
        createTask('/list/901204466996/task').then((response) => {
            expect(response.status).to.eq(200)
        });
    })

    it('get task by id', () => {
        getTask('8696g3pat').then((response) => {
            expect(response.status).to.eq(200)
        })
    });

    it('update task by id', () => {
        createTask('/list/901204466996/task').then((response) => {
            const taskId = response.body.id
            updateTask(taskId).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    });

    it('delete task by id', () => {
        createTask('/list/901204466996/task').then((response) => {
            const taskId = response.body.id
            deleteTask(taskId).then((response) => {
                expect(response.status).to.eq(204)
            })
        })
    });

    it('get filtered team tasks', () => {
        getFilteredTeamTasks(9012298760).then((response) => {
            expect(response.status).to.eq(200)
        })
    });

    it('get Bulk Tasks Time In Status', () => {
        getBulkTasksTimeInStatus('8696g6997', '8696g4xrp').then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})
