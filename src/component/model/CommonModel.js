
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState ,useRef} from 'react';
export const CommonModel = (props)=>{
   // const [openModal, setOpenModal] = useState();
   

    return(
        <div>
         
        
      <Modal show={props.openModal === 'pop-up'} 
      size="md"
       popup 
      onClose={() => props.handelClose(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            {/* <HiOutlineExclamationCircle 
             className="mx-auto mb-4 h-14 w-14 
             text-gray-400 dark:text-gray-200" /> */}
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this user?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure"
               onClick={() => props.confirmAction(props.id)}>
                Yes, I'm sure
              </Button>
              <Button color="gray"
               onClick={() => props.handelClose(undefined)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

        </div>
    )
}


export const UserEditModel = (props)=>{

  //const [openModal, setOpenModal] = useState();
  //const emailInputRef = useRef<HTMLInputElement>(null)
 

  return(
    <>
   
    <Modal
      show={props.openModal === 'initial-focus'}
      size="md"
      popup
      onClose={() => props.handelClose()}
      
    >
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <h3 className="text-xl
           font-medium text-gray-900 dark:text-white"
           >User Update</h3>
           <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput type="text" name="name" placeholder="Your Name" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput id="email"  placeholder="Enter Email"  />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="mobile" value="Your mobile" />
            </div>
            <TextInput  type="text" name='mobile'  placeholder="Your Mobile"/>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              {/* <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label> */}
            </div>
            {/* <a href="/modal" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
              Lost Password?
            </a> */}
          </div>
          <div className="w-full">
            <Button >Update</Button>
          </div>
          {/* <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?&nbsp;
            <a href="/modal" className="text-cyan-700 hover:underline dark:text-cyan-500">
              Create account
            </a>
          </div> */}
        </div>
      </Modal.Body>
    </Modal>
  </>
  )
}