from base.com.vo.citizendetails_vo import CitizenDetailsVO


class CitizenDetailsDAO:
    def view_citizendetails(self):
        citizendetails_vo_list = CitizenDetailsVO.query.all()
        return citizendetails_vo_list

    def view_file_path(self, citizendetails_vo):
        citizendetails_vo_list = CitizenDetailsVO.query.filter_by(
            citizen_filename=citizendetails_vo.citizen_filename).all()
        return citizendetails_vo_list

    def view_license_number(self, citizendetails_vo):
        citizendetails_vo_list = CitizenDetailsVO.query.get(citizendetails_vo.citizen_id)
        return citizendetails_vo_list
