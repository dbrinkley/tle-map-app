import ExhibitorObj from '../ExhibitorObj';

let ExhibitorApi = {
  getExhibitor(id) {
    const strId = typeof id === 'string' || id instanceof String ? id : id.toString();
    let vendorInfo = Object.keys(ExhibitorObj).find(key => key === strId);
    return vendorInfo === undefined ? null : ExhibitorObj[vendorInfo];
  }
}

export default ExhibitorApi