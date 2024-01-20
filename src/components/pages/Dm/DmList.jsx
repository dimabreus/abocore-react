import React from 'react'
import { Link } from 'react-router-dom'
import list from "../../../list/list"
import { Box } from '@mui/material'


const DmList = () => {
    return (
        <div className='dmList'>
            {Object.values(list).map(el => (
                <Link to={"/dm/" + el.id} key={el.id}>
                    <Box className='dialog' sx={{
                        marginBottom: "15px",
                        border: "1px solid white",
                        width: "100vh",
                        padding: "15px",
                        borderRadius: "10px",
                    }}>
                        <div className='flex'>
                            <div className='dialog_avatar'>
                                <Box
                                    component="img"
                                    sx={{
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "25px",
                                        marginRight: "15px"
                                    }}
                                    alt="https://vk.com/images/camera_50.png"
                                    src={el.avatar}
                                /></div>

                            <Box className='dialog_name' sx={{ marginTop: "-5px" }}><h3>{el.name}</h3></Box>
                        </div>
                    </Box>
                </Link>
            ))}
        </div>
    )
}

export default DmList