import { Box, Paper } from '@mui/material'
import React from 'react'

const Draft = () => {
  return (
    <Box
      mt={2}
      sx={{
        marginTop: "10px",
        width: "100%",
        backgroundColor: "#fff",
        height: "auto",
      }}>
      <Paper elevation={2}
        sx={{
          width: "100%",
          height: "100%",
          padding: {
            xs: "10px",
            sm: "10px",
            md: "10px",
            lg: "10px",
          },
        }}>
        Draft
      </Paper>
    </Box>
  )
}

export default Draft
