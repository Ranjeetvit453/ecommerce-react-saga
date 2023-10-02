import { Table } from 'flowbite-react';
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { LoderSpinner } from '../../utils/Utils';
import { userListActionRequest } from '../../redux/action/userAction';
import { Pagination } from 'flowbite-react';
import { FaTrash,FaPenToSquare } from "react-icons/fa6";
import { CommonModel } from '../model/CommonModel';
const UserList = ()=>{
    const dispatch = useDispatch();
    const userData = useSelector((state)=>state.user);
    const pagesCount= useSelector((state)=>state.user?.pagesCount);
   //console.log(" pagesCount user list ",pagesCount)
    const loader = useSelector((state)=>state.user.loader);
    const [currentPage, setCurrentPage] = useState(1);
    const [openModal, setShow] = useState();
    const [delteId, setDelete] = useState();
    const onPageChange = (page) => setCurrentPage(page);
       
        useEffect(()=>{

        dispatch(userListActionRequest(currentPage))
     },[currentPage])

     const handleEdit = (id)=>{
      setShow('pop-up')
        console.log(" helo  edit ",id)
        setDelete(id)
     }

     const handleDelete = (id)=>{
        console.log(" hello delete",id)
        setDelete(id)
     }

     const handelClose =()=>{
      console.log(" handelClose ")
      setShow('')
     }

     const confirmAction = (id)=>{
      console.log("confirm ------",id) 
     }

   return(
    <>
  <div class="max-w-sm w-full bg-white dark:bg-gray-800 p-4 md:p-6" style={{ marginLeft:265,marginTop:-415}}>
  <h4 class="text-2xl font-bold dark:text-white">User List</h4>
  
   {loader ? <LoderSpinner/>:
        <Table>
      <Table.Head>
        <Table.HeadCell>
           name
        </Table.HeadCell>
        <Table.HeadCell>
          Email
        </Table.HeadCell>
        <Table.HeadCell>
          mobile
        </Table.HeadCell>
        <Table.HeadCell>Action
          <span className="sr-only">
            Edit
          </span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {userData?.data.length>0 && userData?.data.map((data)=>(
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {data.name}
          </Table.Cell>
          <Table.Cell>
           {data.email}
          </Table.Cell>
          <Table.Cell>
           {data.mobile}
          </Table.Cell>
        
          <Table.Cell>
            
            <span className="font-medium text-cyan-600
             hover:underline dark:text-cyan-500"
              onClick={()=>{handleEdit(data._id)}}>

              <FaPenToSquare />
            </span>&nbsp;
            <span className="font-medium text-cyan-600
             hover:underline dark:text-cyan-500" onClick={()=>{handleDelete(data._id)}} >
              <FaTrash />
            </span>
          </Table.Cell>
        </Table.Row>
        ))}
        
        
        
      </Table.Body>
      <CommonModel   openModal={openModal}
       id={delteId}
       handelClose= {handelClose}
       confirmAction = {confirmAction}
        /> 
      {/* <Pagination
      currentPage={currentPage}
      onPageChange={page=>{setCurrentPage(page)}}
      showIcons
      totalPages={userData?.data?.length}
    /> */}
      <Pagination
        currentPage={currentPage}
        layout="pagination"
        nextLabel="Go forward"
        onPageChange={page=>{setCurrentPage(page)}}
        previousLabel="Go back"
        showIcons
        totalPages={pagesCount}
      />
    </Table>
    
    }
    </div>
   
    </>
   )
}

export default UserList