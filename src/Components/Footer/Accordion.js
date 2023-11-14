import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import cx from "classnames";
import { FiPlus } from "react-icons/fi";
import Link from "./Link";
import Icon from "./Icon";
import LinkTag from "./LinkTag";

const Accordion = ({ data }) => {
  return (
    <AccordionPrimitive.Root
      type="single"
      // defaultValue="item-1"
      collapsible
      // className={cx("space-y-4")}
    >
      {data.map(({ displayText, navLinks }, i) => (
        <AccordionPrimitive.Item
          key={`header-${i}`}
          value={`item-${i + 1}`}
          className="focus:outline-none"
        >
          <AccordionPrimitive.Header className="w-full">
            <AccordionPrimitive.Trigger
              className={cx(
                "group",
                "radix-state-open:rounded-t-lg radix-state-closed:rounded-none",
                "focus:outline-none",
                "inline-flex w-full items-center justify-between px-4 py-5 text-left",
                "border-b"
              )}
            >
              <span className="text-sm font-medium">{displayText}</span>
              <FiPlus
                className={cx(
                  "ml-2 h-5 w-5 shrink-0 ease-in-out",
                  "group-radix-state-open:rotate-180 group-radix-state-open:duration-300"
                )}
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="pt-r1 w-full rounded-b-lg px-4 py-5">
            <ul className="text-sm flex flex-col gap-y-4 ml-5">
              {navLinks.map((x, index) => {
                if (x.displayText) {
                  return (
                    <li key={index}>
                      <Link displayText={x.displayText} url={x.url} />
                      {x.tag && <LinkTag tag={x.tag} />}
                    </li>
                  );
                }
                if (x.icon) {
                  return (
                    <li key={index}>
                      <Icon icon={x.icon} url={x.url} />
                    </li>
                  );
                }
              })}
            </ul>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
};

export default Accordion;
