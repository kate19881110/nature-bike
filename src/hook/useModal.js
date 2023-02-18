import { useState } from 'react';

/**
 * 管理視窗邏輯，提供開關狀態管理
 * @param {*} initData 初始視窗資料
 */
const useModal = () => {
  const [visible, setVisible] = useState(false);

  /**
   * 開啟視窗
   * @function openModal
   * @param {*} data 視窗資料
   */
  const openModal = () => {
    setVisible(true);
  };

  /**
   * 關閉視窗
   * @function closeModal
   */
  const closeModal = () => {
    setVisible(false);
  };

  return {
    /**
     * 是否開啟視窗
     * @type {boolean}
     */
    visible,
    /**
     * 視窗資料
     */
    openModal,
    closeModal,
  };
};

export default useModal;
