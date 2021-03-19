import React, { useRef, useEffect, useState, useCallback } from 'react';
import { InputItem, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import styles from './index.less';
import { history } from 'umi';
export default function SearchBtn(props) {
  const { query } = props;
  const inputRef = useRef(null); // 拿到实例
  const [searchModal, setSearchModal] = useState(false);
  const [inputVal, setInputVal] = useState('');
  useEffect(() => {
    // 页面挂载，自动获焦
    inputRef.current.focus();
  }, []);
  const onChange = useCallback((e) => {
    // 受控组件，存起来input的val
    setInputVal(e);
  });
  const search = useCallback(() => {
    if (searchModal) {
      // 搜索列表,列表要从第一页开始
      const val = inputVal.trim();
      query({ pageNo: 0, searchKey: val });
    } else {
      // 跳到首页
      history.push('/');
    }
  });
  // 相当于vue里的计算属性，判断input的数据是不是为空
  useEffect(() => {
    const val = inputVal.trim();
    setSearchModal(!!val);
  }, [inputVal]);
  return (
    <div className={styles.main}>
      <InputItem
        clear
        placeholder="请输入商品名称搜索"
        ref={inputRef}
        className={styles.searchInput}
        onChange={onChange}
      ></InputItem>
      <Button type="primary" className={styles.btn} onClick={search}>
        {searchModal ? '搜索' : '取消'}
      </Button>
    </div>
  );
}
