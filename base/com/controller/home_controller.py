from base import app
from flask import render_template, request
from base.com.controller.login_controller import admin_login_session, admin_logout_session


@app.route('/admin/load_dashbord')
def admin_load_dashbord():
    try:
        if admin_login_session() == "admin":
            return render_template('admin/index.html')
        else:
            return admin_logout_session()
    except Exception as ex:
        print("admin_load_home route exception occured>>>>>>>>>>", ex)


@app.route('/traffic_police_station/load_dashbord')
def user_load_dashbord():
    try:
        if admin_login_session() == "user":
            return render_template('traffic_police_station/index.html')
        else:
            return admin_logout_session()
    except Exception as ex:
        print("user_load_home route exception occured>>>>>>>>>>", ex)


@app.route('/traffic_police_station/load_about_us')
def user_load_about_us():
    try:
        if admin_login_session() == "user":
            return render_template('traffic_police_station/aboutUs.html')
        else:
            return admin_logout_session()
    except Exception as ex:
        print("user_load_about_us route exception occured>>>>>>>>>>", ex)


