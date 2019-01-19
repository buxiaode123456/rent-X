package priv.thinkam.rentx.dao.entity;

import java.time.LocalDateTime;
import priv.thinkam.rentx.common.base.BaseEntity;
import lombok.*;
import lombok.experimental.Accessors;

/**
 * 出租项
 *
 * @author yanganyu
 * @date 2019-01-19
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Accessors(chain = true)
@ToString(callSuper = true)
public class Item extends BaseEntity {

    /**
     * 租用者ID
     */
    private Integer userId;

    /**
     * 物品编号
     */
    private Integer stuffId;

    /**
     * 租用日期
     */
    private LocalDateTime createTime;

    /**
     * 租用天数
     */
    private Integer rentDay;

    /**
     * 归还日期
     */
    private LocalDateTime endTime;

    /**
     * 申请时间
     */
    private LocalDateTime applyTime;

    /**
     * 状态（0：申请中；1：不通过；2：租用中；3： 已归还）
     */
    private Integer status;


}
