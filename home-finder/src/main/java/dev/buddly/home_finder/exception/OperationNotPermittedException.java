package dev.buddly.home_finder.exception;

public class OperationNotPermittedException extends RuntimeException{
    public OperationNotPermittedException(String msg) {
        super(msg);
    }
}
