import classes from './SocialNetwork.module.scss'

import { useState } from 'react';
import { Button, Input } from 'antd';
import { Select } from 'antd';

const SocialNetwork = () => {
  const { Option } = Select;
  const [social, setSocial] = useState(true)
  
  function handleChange(value) {
    if (value === 'telegram') setSocial(false)
    else setSocial(true)
  }


  return (
    <div className={classes.wrapper}>
      <h2>Social Networks</h2>
      <div className={classes.network_container}>
        <div className={classes.network_select_box}>
          <Select size='large' defaultValue="Facebook" style={{ width: '100%' }} onChange={handleChange}>
            <Option value="facebook">Facebook</Option>
            <Option value="instagram">Instagram</Option>
            <Option value="tik-tok">Tik-Tok</Option>
            <Option value="vk">VK</Option>
            <Option value="odnoklassniki">Odnoklassniki</Option>
            <Option value="telegram">Telegram</Option>
          </Select>
        </div>
        <div className={classes.network_auth_box}>
          {
            social ? <>
              <div className={classes.input_block}>
                <Input size='large' placeholder="Username, phone or email" />
              </div>
              <div className={classes.input_block}>
                <Input size='large' type='password' placeholder="Password" />
              </div>
            </> : <div className={classes.input_block}>
              <Input size='large' placeholder="Telegram Link" />
            </div>
          }


          <div className={classes.btn_box}>
            <Button type="primary" size='large' >Confirm</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialNetwork
