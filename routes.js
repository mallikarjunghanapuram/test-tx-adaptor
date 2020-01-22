const Router = require('koa-router');


const customerController = require("./controllers/customer");

const router = new Router();


router.post("/customer", customerController.createCustomerDetails);
router.get("/customer", customerController.getCustomerDetails);
router.get("/customer/:id", customerController.getCustomerDetailsId);
router.put("/customer/:id", customerController.updateCustomerDetails);
router.delete("/customer/:id", customerController.deleteCustomerDetails);



module.exports = router;   
