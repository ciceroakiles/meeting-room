package com.sample.meetingroom.controller;

import com.sample.meetingroom.entity.Sala;
import com.sample.meetingroom.exceptions.NotFoundException;
import com.sample.meetingroom.repository.SalaRepository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class SalaController {
    
    @Autowired
    private SalaRepository salaRepository;

    // list
    @GetMapping("/sala")
    public List<Sala> getAll() {
        return salaRepository.findAll();
    }

    // GET
    @GetMapping("/sala/{id}")
    public ResponseEntity<Sala> getById(@PathVariable(value = "id") Long id) throws NotFoundException {
        Sala sala = salaRepository.findById(id)
            .orElseThrow(
                () -> new NotFoundException("Sala não encontrada (" + id + ")")
            );
        return ResponseEntity.ok().body(sala);
    }

    // POST
    @PostMapping("/sala")
    public Sala criaSala(@Validated @RequestBody Sala sala) {
        return salaRepository.save(sala);
    }

    // PUT
    @PutMapping("/sala/{id}")
    public ResponseEntity<Sala> atualizaSala(@PathVariable(value = "id") Long id,
                                             @Validated @RequestBody Sala salaInfo) throws NotFoundException {
        Sala sala = salaRepository.findById(id)
            .orElseThrow(
                () -> new NotFoundException("Sala não encontrada (" + id + ")")
            );
        sala.setName(salaInfo.getName());
        sala.setData(salaInfo.getData());
        sala.setHoraInicio(salaInfo.getHoraInicio());
        sala.setHoraFim(salaInfo.getHoraFim());
        salaRepository.save(sala);
        return ResponseEntity.ok().body(sala);
    }

    // DELETE
    @DeleteMapping("/sala/{id}")
    public Map<String, Boolean> deleteById(@PathVariable(value = "id") Long id) throws NotFoundException {
        salaRepository.findById(id)
            .orElseThrow(
                () -> new NotFoundException("Sala não encontrada (" + id + ")")
            );
        salaRepository.deleteById(id);
        Map<String, Boolean> resp = new HashMap<>();
        resp.put("Sala " + id + " deletada", true);
        return resp;
    }
}
