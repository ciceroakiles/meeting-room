package com.sample.meetingroom.exceptions;

import java.util.Date;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> GlobalException(Exception ex, WebRequest req) {
        ErrorDetails ed = new ErrorDetails(new Date(), ex.getMessage(), req.getDescription(false));
        return new ResponseEntity<>(ed, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<?> notFound(NotFoundException nfex, WebRequest req) {
        ErrorDetails ed = new ErrorDetails(new Date(), nfex.getMessage(), req.getDescription(false));
        return new ResponseEntity<>(ed, HttpStatus.NOT_FOUND);
    }
}
