import React from "react";
import "./orders.css";
import TableList from "../TableList/TableList"
import {
  Box,
  Divider,
  Flex,
  IconButton,
  Stack,
  Button,
  Input,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

const Orders = () => {
  return (
    <Box style={{ width: "952px", height: "500px", backgroundColor: "white" }}>
      <Box className="header-container">
        <Flex justify="space-between" align="flex-end">
          <Box pb="10px" className="orders-text">
            Orders
          </Box>
          <Box>
            <Flex justify="space-between" w="200px">
              <Box>
                <IconButton
                  colorScheme="teal"
                  aria-label="Call Segun"
                  size="sm"
                  icon={<PhoneIcon style={{ color: "red" }} />}
                  style={{ borderRadius: "50%", backgroundColor: "#F1D1D1" }}
                />
                <span className="button-icon-text">RE-ASSIGN</span>
              </Box>
              <Box>
                <IconButton
                  colorScheme="teal"
                  aria-label="Call Segun"
                  size="sm"
                  icon={<PhoneIcon style={{ color: "red" }} />}
                  style={{ borderRadius: "50%", backgroundColor: "#F1D1D1" }}
                />
                <span className="button-icon-text">CANCEL</span>
              </Box>
              <Box>
                <IconButton
                  colorScheme="teal"
                  aria-label="Call Segun"
                  size="sm"
                  icon={<PhoneIcon style={{ color: "red" }} />}
                  style={{ borderRadius: "50%", backgroundColor: "#F1D1D1" }}
                />
                <span className="button-icon-text">DELETE</span>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex style={{ width: "530px" }} justify="space-between">
          <Box>
            <Button
              colorScheme="teal"
              size="sm"
              variant="outline"
              className="order-variant-button"
            >
              TODAY
            </Button>
            <Button
              colorScheme="teal"
              size="sm"
              variant="outline"
              className="order-variant-button"
            >
              CENTERS
            </Button>
            <Button
              colorScheme="teal"
              size="sm"
              variant="outline"
              className="order-variant-button"
            >
              PACKAGE
            </Button>
          </Box>
          <Box>
            <div style={{width:"258px"}}>
              <Input
                placeholder="Search for orders"
                size="sm"
                className="order-input-search"
              />
            </div>
          </Box>
        </Flex>
      </Box>
      <Divider pr="50px" />
      <Box className="table-container">
       <TableList/>
      </Box>
    </Box>
  );
};

export default Orders;
