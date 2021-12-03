const BookingDAL = require('./booking-dal');

class BooingService{
    _book = async(req,res)=>{
        try {
            let resp =  await BookingDAL.createBooking(req,res);
            res.status(200).json({ success: true, data : resp});
        } catch (error) {
            return res.status(404).send({error});
        }
    };

}



module.exports = new BooingService();