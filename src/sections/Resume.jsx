import React from 'react'

const Resume = () => {
  return (
    <div style={{ height: '100vh' }}>
      <iframe
        src="assets/resume.pdf"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Resume"
      />
    </div>  )
}

export default Resume