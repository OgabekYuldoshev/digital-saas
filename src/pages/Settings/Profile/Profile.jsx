import classes from './Profile.module.scss'

import { Button, Divider, Input } from 'antd';
import { Select } from 'antd';

const Profile = () => {
  const { Option } = Select;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div className={classes.wrapper}>
      <h2>Profile</h2>
      <div className={classes.input_container}>
        <div className={classes.input_box}>
          <div className={classes.input_block}>
            <Input size='large' placeholder="F.I.O" />
          </div>
          <div className={classes.input_block}>
            <Input size='large' placeholder="Email" />
          </div>
          <div className={classes.input_block}>
            <Input size='large' placeholder="Phone Number" />
          </div>
          <div className={classes.input_block}>
            <Select size='large' defaultValue="lucy" style={{ width: '100%' }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className={classes.btn_block}>
            <Button type="primary">Save</Button>
          </div>
        </div>
        <Divider />
        <div className={classes.input_box}>
          <div className={classes.input_block}>
            <Input size='large' type={'password'} placeholder="Password" />
          </div>
          <div className={classes.input_block}>
            <Input size='large' type={'password'} placeholder="Confirm password" />
          </div>
          <div className={classes.btn_block}>
            <Button type="primary">Save</Button>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Profile
