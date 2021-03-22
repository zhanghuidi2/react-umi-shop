import React from 'react';
import { List, Checkbox, Stepper } from 'antd-mobile';
import styles from './index.less';
import classnames from 'classnames';
export default function ListCom(props) {
  const CheckboxItem = Checkbox.CheckboxItem;
  const { list, updateProduct } = props;
  return (
    <div className={styles.main}>
      {list.map(({ id, img, checked, title, price, count }, index) => (
        <CheckboxItem
          onChange={() =>
            updateProduct({ id, index, count, checked: !checked })
          }
          checked={checked}
          key={id}
        >
          <div className={styles.node}>
            <div className={styles.imgBox}>
              <img src={img} alt={title} />
            </div>
            <div className={styles.right}>
              <div className={'twoRows'}>{title}</div>
              <div className={styles.info}>
                <p className={classnames('red')}>￥{price}</p>
                <Stepper
                  className={styles.stepper}
                  showNumber
                  max={999}
                  min={0}
                  value={count}
                  onChange={(count) => updateProduct({ id, index, count })}
                />
              </div>
            </div>
          </div>
        </CheckboxItem>
      ))}
    </div>
  );
}
