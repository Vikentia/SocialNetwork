import React, { useState, useEffect } from "react";


const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    if (status !== props.status) {
      setStatus(props.status)
    }
  }, [editMode, status])

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }
  return (
    <div >
      {editMode
        ? <input onChange={onStatusChange} value={status} onBlur={deactivateEditMode} autoFocus />
        : <span onDoubleClick={activateEditMode} >{props.status || 'no status'}</span>
      }
    </div>
  );
}
export default ProfileStatus;