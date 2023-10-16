import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
const Popup=()=>
{
    const [open,setOpen]=useState(false)
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
return(<>
        <div >
      <Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent >
<span className="locationsBar DialogContent" style={{display:"block",textAlign:"center",width:300,backgroundColor:"#fff",height:"590px",color:"#373373",cursor:"pointer",padding:10,fontSize:20}}>
you are being directed to the register page
</span>
        </DialogContent>
      </Dialog>
    </div>
</>)
}
export default Popup