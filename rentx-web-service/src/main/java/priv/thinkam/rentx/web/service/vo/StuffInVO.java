package priv.thinkam.rentx.web.service.vo;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import priv.thinkam.rentx.common.base.BaseVO;
import priv.thinkam.rentx.common.enums.StuffStatusEnum;

import java.math.BigDecimal;
import java.time.LocalDate;

/**
 * 租用物品VO
 *
 * @author thinkam
 * @date 2019/02/10
 */
@EqualsAndHashCode(callSuper = true)
@Data
@Accessors(chain = true)
public class StuffInVO extends BaseVO {
	/**
	 * stuff id
	 */
	private Integer id;
	/**
	 * 类别名称
	 */
	private String categoryName;
	/**
	 * 物品名称
	 */
	private String stuffName;
	/**
	 * 所有者名称
	 */
	private String ownerName;
	/**
	 * 押金(rmb)
	 */
	private BigDecimal deposit;

	/**
	 * 租金（rmb/day）
	 */
	private BigDecimal rental;
	/**
	 * 物品状态（0:未租；1:申请租用；2:已租;3:不出租）
	 */
	private StuffStatusEnum status;
	/**
	 * 应还日期
	 */
	private LocalDate shouldReturnDate;
}
