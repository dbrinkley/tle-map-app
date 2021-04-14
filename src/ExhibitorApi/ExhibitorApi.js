import ExhibitorObj from '../ExhibitorObj';

let ExhibitorApi = {

  getExhibitor(id) {
    const strId = typeof id === 'string' || id instanceof String ? id : id.toString();
    let vendorInfo = Object.keys(ExhibitorObj).find(key => key === strId);
    return vendorInfo === undefined ? null : ExhibitorObj[vendorInfo];
  },

  checkBooth(booth) {
    const boothStr = typeof booth === 'string' || booth instanceof String ? booth : booth.toString();
    const vendorInfo = Object.values(ExhibitorObj).filter(exhibitor => exhibitor.block_name === boothStr);

    return (Array.isArray(vendorInfo) && vendorInfo.length)
      ? vendorInfo[0].vendor_id
      : false;
  }
}

export default ExhibitorApi