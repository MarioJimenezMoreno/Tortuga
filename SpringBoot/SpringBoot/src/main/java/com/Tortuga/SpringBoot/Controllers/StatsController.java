package com.Tortuga.SpringBoot.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Tortuga.SpringBoot.Models.Stats;
import com.Tortuga.SpringBoot.Services.StatsService;






@RestController
@RequestMapping("/api/stats")
public class StatsController {
//	@Autowired
	private StatsService statsService;

	public StatsController(StatsService statsService) {
		this.statsService = statsService;
	}

	@GetMapping
	public List<Stats> saludar(@RequestParam String username) {
		return statsService.findAllTasks(username);
	}
	
}
