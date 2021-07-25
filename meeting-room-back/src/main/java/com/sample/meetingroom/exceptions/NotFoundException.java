package com.sample.meetingroom.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class NotFoundException extends Exception {
    
    //private static final Long svUID = 1L;

    public NotFoundException(String message) {
        super(message);
    }
}
