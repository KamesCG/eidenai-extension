export const initialState = {
  ...localStorage
}
export const getDepartment = (state,delta) =>state || null
export const getDelta = (state,delta) =>state[delta] || null
export const getDeltaStatus = (state,delta) =>state[delta] && state[delta].status || null