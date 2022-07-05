import { Box, Typography } from '@mui/material'
import React from 'react'

const Chat = () => {
  return (
      <Box sx={{
          width: "100%",
          height: "auto",
          dispay: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px"
      }}>
          <Typography align="center">Chat</Typography>
      </Box>
  )
}

export default Chat
