package com.ecommerce.sportscenter.mapper;

import com.ecommerce.sportscenter.entity.OrderAggregate.Order;
import com.ecommerce.sportscenter.model.OrderDto;
import com.ecommerce.sportscenter.model.OrderResponse;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderMapper {

    OrderResponse toOrderResponse(Order order);

    Order toOrder(OrderDto orderDto);

    List<OrderResponse> toOrderResponseList(List<Order> orders);
}