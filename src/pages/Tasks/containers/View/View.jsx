import React from 'react'
import { useQueryParams } from 'react-router-query-hooks'
import useSingle from "../../../../module/task/hooks/useSingle"

const View = () => {
  const [query] = useQueryParams()
  const { item } = useSingle({ id: query?.task })
  console.log(item)

  return (
    <div>View</div>
  )
}

export default View