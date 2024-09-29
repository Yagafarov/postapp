import Main from '../components/ui/Main';
import Content from '../components/ui/Content';

// https://natural-delight-4333b80f0c.strapiapp.com/api/sensor-datas


const Dashboard = ({darkMode}) => {
  return (
      <Main>
        <Content>
          <div className='mt-4'>
          <a target="_blank" className='bg-white p-5 border shadow mt-3'  href="https://natural-delight-4333b80f0c.strapiapp.com/admin" >Havola admin</a>
          </div>
        </Content>
      </Main>
  )
}

export default Dashboard