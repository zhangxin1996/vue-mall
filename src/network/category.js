import {request1} from "./request"

export function getCategory() {
  return request1({
    url: '/category'
  })
}

export function getSubCategory(maitKey) {
  return request1({
    url: "subcategory",
    params: {
      maitKey
    }
  })
}

export function getSubCategoryDetail(miniWallkey, type) {
  return request1({
    url: "subcategory/detail",
    params: {
      miniWallkey,
      type
    }
  })
}