package com.Tortuga.SpringBoot.Services;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.Tortuga.SpringBoot.Models.Stats;
import com.Tortuga.SpringBoot.Repositories.StatsRepository;

import org.springframework.jdbc.core.JdbcTemplate;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import javax.sql.DataSource;


@Service
public class StatsService {

	private StatsRepository statsRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;

	public StatsService(StatsRepository statsRepository) {
		this.statsRepository = statsRepository;
	}

	public List<Stats> findAllTasks(String username) {
		String query = "SELECT users.user_id, username, date, name, duration, color_code FROM tasks JOIN users_tasks ON tasks.task_id = users_tasks.task_id JOIN users ON users.user_id = users_tasks.user_id JOIN categories ON categories.category_id = tasks.category_id WHERE username = '"+ username+"';";	
		List<Map<String, Object>> queryResult = jdbcTemplate.queryForList(query);
		List<Stats> statsList = new ArrayList<Stats>();
		
		for (Map<String, Object> statsResult : queryResult) {
			Stats stats = new Stats();
			stats.setUsername((String) statsResult.get("username"));
			stats.setDate((Date) statsResult.get("date"));
			stats.setDuration((Double) statsResult.get("duration"));
			stats.setName((String) statsResult.get("name"));
			stats.setColorCode((String) statsResult.get("color_code"));			
			statsList.add(stats);

		
		    }
		return statsList;
	}

	
}
