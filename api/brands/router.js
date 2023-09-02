const app = require('express');
const router = app.Router();

const {getAllBrand,BrandById,updateBrandById,deleteBrand,AddBrands} = require('./controller')


router.post('/add-brand', AddBrands);
router.get('/get-all-brands', getAllBrand);
router.get('/get-brand-by-id', BrandById);
router.delete('/delete-brand', deleteBrand);
router.put('/update-brand-id', updateBrandById); 



module.exports = router