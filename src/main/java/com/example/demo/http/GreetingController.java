package com.example.demo.http;

import com.example.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;

import javax.servlet.http.HttpSession;

/**
 * Created by Administrator on 2018/12/17.
 */
@Controller
public class GreetingController {

    @GetMapping("/greeting")
    public String greeting(@RequestParam(name = "name", required = false, defaultValue = "World")
                                   String name, Model model, HttpSession session) {
        model.addAttribute("name", name);
        session.setAttribute("userId", "testUser");
        return "greeting";
    }

    @Value("${sysconfig.buildEnv}")
    private String buildEnv;

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("buildEnv", buildEnv);
        model.addAttribute("contextPath", "src");
        return "pro".equals(buildEnv) ? "dist/index.dist" : "index";
    }


    @ResponseBody
    @GetMapping("/user")
    public User userInfo() {
        User user = new User();
        user.setName("test");
        user.setAge(18);
        return user;
    }

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;


    @ResponseBody
    @GetMapping("/hello/{name}")
    public String websocketGreeting(@PathVariable String name) throws Exception {

        simpMessagingTemplate.convertAndSend("/topic/greetings","Hello, " + name + "!");

        return "send success";
    }
}
