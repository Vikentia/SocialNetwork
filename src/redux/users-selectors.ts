import { createSelector } from 'reselect'
import { AppStateType } from './redux-store'

const getUsersSel = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSel, (users) => {
    return users
    // return users.filter(u => true)
})
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getUsersFilter = (state: AppStateType) => {
    return state.usersPage.filter
}