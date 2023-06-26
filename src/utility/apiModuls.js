import ApiConfig, {HttpMethod} from '../dataManaget/apiConfig'
import {isEmpty} from './utility'

// get Data
export const getData = async url => {
  try {
    const {
      data: {result, isSuccess, code, message},
    } = await ApiConfig.request({
      method: HttpMethod.GET,
      url: url,
    })
    if (!isSuccess || isEmpty(result)) {
      return alert(message)
    }
    if (code === 200) {
      return result
    } else {
      return alert(message)
    }
  } catch (error) {
    return error
  }
}

// getDetail Data
export const getDetailInfo = async (url, id) => {
  try {
    const {
      data: {result, isSuccess, code, message},
    } = await ApiConfig.request({
      method: HttpMethod.GET,
      url: `${url}/${id}`,
    })
    if (!isSuccess || isEmpty(result)) {
      return alert(message)
    }
    if (code === 1000) {
      return result
    } else {
      alert(message)
    }
  } catch (error) {
    return error
  }
}

// deleted or upDate
export const deletedData = async (url, id, data) => {
  try {
    const {
      data: {result, isSuccess, code, message},
    } = await ApiConfig.request({
      method: HttpMethod.PATCH,
      url: `${url}/${id}`,
      data: data,
    })
    if (!isSuccess || isEmpty(result)) {
      return message
    }
    if (code === 1000) {
      return message
    } else {
      return message
    }
  } catch (error) {
    return error
  }
}

// upDate
export const upDateData = async (url, id, data) => {
  try {
    const {
      data: {result, isSuccess, code, message},
    } = await ApiConfig.request({
      method: HttpMethod.PUT,
      url: `${url}/${id}`,
      data: data,
    })
    if (!isSuccess || isEmpty(result)) {
      return message
    }
    if (code === 1000) {
      return message
    } else {
      return message
    }
  } catch (error) {
    return error
  }
}

// created
export const createdData = async (url, data) => {
  try {
    const {
      data: {result, isSuccess, code, message},
    } = await ApiConfig.request({
      method: HttpMethod.POST,
      url: url,
      data: data,
    })
    if (!isSuccess || isEmpty(result)) {
      return alert(message)
    }
    if (code === 1000) {
      return message
    } else {
      return message
    }
  } catch (error) {
    return error
  }
}
