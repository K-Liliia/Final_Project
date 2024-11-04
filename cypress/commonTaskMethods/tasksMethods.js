import {faker} from "@faker-js/faker";

export const getTasks = (url) => {
    return cy.sendRequest('GET', url)
}

export const createTask = (url) => {
    const taskName = faker.lorem.sentence()
    return cy.sendRequest('POST', url, {
        name: taskName,
        description: "New task is created by API"
    })
}

export const getTask = (taskID) => {
    return cy.sendRequest('GET', `/task/${taskID}`)
}

export const updateTask = (taskID) => {
    const updatedTaskName = faker.lorem.sentence()
    return cy.sendRequest('PUT', `/task/${taskID}`, {
        name: updatedTaskName,
        description: "Updated Task Content",
        status: "in progress",
        archived: false
    })
}

export const deleteTask = (taskID) => {
    return cy.sendRequest('DELETE', `/task/${taskID}`)
}

export const getFilteredTeamTasks = (teamID) => {
    let url = `/team/${teamID}/task?team_id=${teamID}`
    cy.log("Current url is -----> " + url)
    return cy.sendRequest('GET', `/team/${teamID}/task?team_id=${teamID}`)
}

export const getBulkTasksTimeInStatus = (taskID, taskID1) => {
    return cy.sendRequest('GET', `/task/bulk_time_in_status/task_ids?task_ids=${taskID}&task_ids=${taskID1}`)
}

