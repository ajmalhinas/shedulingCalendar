<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="demo" tagdir="/WEB-INF/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>AJAX Event Calendar for Java and jQuery</title>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.3.2.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/daypilot/common.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/daypilot/calendar.js"></script>
	<link type="text/css" href='${pageContext.request.contextPath}/media/layout.css' rel="stylesheet" />    

</head>
<body>



<table style="width:100%">
        <tr>
            <td valign="top">
				<div id="dpc"></div>
            </td>
		</tr>
</table>
            

<script type="text/javascript">

var dpc = new DayPilot.Calendar("dpc");
dpc.backendUrl = '${pageContext.request.contextPath}/dpc';
dpc.ajaxError = function(req) { new DayPilot.Modal().showHtml(req.responseText); };
dpc.borderColor = "#a0a0a0";
dpc.viewType = "WorkWeek";
dpc.heightSpec = 'BusinessHours';
dpc.timeRangeSelectedHandling = 'CallBack';
dpc.eventMoveHandling = 'CallBack';
dpc.eventResizeHandling = 'CallBack';
dpc.initScrollPos = 9 * 40 + 1; 
dpc.Init();

</script>



</body>
</html>