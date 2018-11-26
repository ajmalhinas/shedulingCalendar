/*
Copyright © 2012 Annpoint, s.r.o.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-------------------------------------------------------------------------

NOTE: Reuse requires the following acknowledgement (see also NOTICE):
This product includes DayPilot (http://www.daypilot.org) developed by Annpoint, s.r.o.
*/

package org.daypilot.demo.db;

import java.sql.Timestamp;
import java.util.TreeMap;

import org.daypilot.date.DateTime;

public class Row extends TreeMap<String, Object> {
	private static final long serialVersionUID = -2826532351751710037L;

	public Row() {
		super(String.CASE_INSENSITIVE_ORDER);
	}
	
	public String str(String field) {
		return (String) get(field);
	}
	
	public DateTime dateTime(String field) {
		return new DateTime((Timestamp)get(field));
	}
	
	public boolean isEmpty(String field) {
		if (isNull(field)) {
			return true;
		}
		if (get(field).toString().trim().equals("")) {
			return true;
		}
		return false;
	}
	
	public boolean isNull(String field) {
		return get(field) == null;
	}
	
}
