"use client";

import Link from "next/link";
import { useCart } from "../components/CartContext";
import styles from "./cart.module.css";

export default function CartPage() {
  const { items, removeItem, updateQty, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(140,90,40,0.35)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        <h2>Your basket is empty</h2>
        <p>Browse our hypnotherapy audio sessions and add one to get started.</p>
        <Link href="/shop" className="btn btn-primary">Browse Tapes</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`}>

        {/* Header */}
        <div className={styles.header}>
          <h1>Your Basket</h1>
          <button className={styles.clearBtn} onClick={clearCart}>Clear all</button>
        </div>

        <div className={styles.layout}>

          {/* Item list */}
          <div className={styles.itemList}>
            {items.map(item => (
              <div key={item.id} className={`${styles.item} glass-panel`}>
                <div className={styles.itemInfo}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  {item.duration && (
                    <span className={styles.itemMeta}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {item.duration} · Digital download
                    </span>
                  )}
                </div>

                <div className={styles.itemControls}>
                  {/* Qty stepper */}
                  <div className={styles.stepper}>
                    <button
                      className={styles.stepBtn}
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      aria-label="Decrease quantity"
                    >−</button>
                    <span className={styles.qty}>{item.qty}</span>
                    <button
                      className={styles.stepBtn}
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      aria-label="Increase quantity"
                    >+</button>
                  </div>

                  <span className={styles.itemPrice}>
                    £{(parseFloat(item.price.replace("£", "")) * item.qty).toFixed(2)}
                  </span>

                  <button
                    className={styles.removeBtn}
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.title}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <aside className={`${styles.summary} glass-panel`}>
            <h2 className={styles.summaryTitle}>Order Summary</h2>

            <div className={styles.summaryLines}>
              {items.map(item => (
                <div key={item.id} className={styles.summaryLine}>
                  <span>{item.title}{item.qty > 1 && ` ×${item.qty}`}</span>
                  <span>£{(parseFloat(item.price.replace("£", "")) * item.qty).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className={styles.summaryDivider} />

            <div className={styles.summaryTotal}>
              <span>Total</span>
              <span className={styles.totalAmount}>£{totalPrice.toFixed(2)}</span>
            </div>

            <p className={styles.summaryNote}>Digital products — instant download after payment</p>

            <button className={`btn btn-primary ${styles.checkoutBtn}`} disabled>
              Checkout — Coming Soon
            </button>

            <Link href="/shop" className={styles.continueLink}>
              ← Continue browsing
            </Link>
          </aside>

        </div>
      </div>
    </div>
  );
}
